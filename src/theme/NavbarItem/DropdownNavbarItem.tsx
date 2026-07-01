import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useLocation } from "@docusaurus/router";
import DropdownNavbarItem from "@theme-original/NavbarItem/DropdownNavbarItem";

interface Plugin {
  prefix: string;
  sidebarId: string;
}

interface DropdownItem {
  type?: string;
  sidebarId?: string;
  label?: string;
  [key: string]: unknown;
}

interface Props {
  label?: string;
  items?: DropdownItem[];
  position?: "left" | "right";
  [key: string]: unknown;
}

const PLUGINS: Plugin[] = [
  { prefix: "/guizhan-builds", sidebarId: "guizhan-builds" },
  { prefix: "/bump", sidebarId: "bump" },
  { prefix: "/genetic-chickengineering", sidebarId: "genetic-chickengineering" },
  { prefix: "/infinity-expansion-2", sidebarId: "infinity-expansion-2" },
  { prefix: "/slimefun-translation", sidebarId: "slimefun-translation" },
];

export default function DropdownNavbarItemWrapper(props: Props) {
  const { pathname } = useLocation();
  const { i18n } = useDocusaurusContext();

  let normalizedPathname = pathname;
  if (i18n.currentLocale !== i18n.defaultLocale) {
    const localePrefix = `/${i18n.currentLocale}`;
    if (normalizedPathname.startsWith(localePrefix)) {
      normalizedPathname = normalizedPathname.slice(localePrefix.length);
    }
  }

  const isPluginDropdown = props.items?.some(
    (item) =>
      item.type === "docSidebar" &&
      item.sidebarId &&
      PLUGINS.some((plugin) => plugin.sidebarId === item.sidebarId),
  );

  if (!isPluginDropdown) {
    return <DropdownNavbarItem {...props} />;
  }

  const activePlugin = PLUGINS.find((plugin) =>
    normalizedPathname.startsWith(plugin.prefix),
  );
  const activeItem = props.items?.find(
    (item) =>
      item.type === "docSidebar" && item.sidebarId === activePlugin?.sidebarId,
  );
  const label = activeItem?.label ?? props.label;

  return <DropdownNavbarItem {...props} label={label} />;
}
