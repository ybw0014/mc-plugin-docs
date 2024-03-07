---
title: Developer Reference
sidebar_position: 1
---

## Adding SlimefunTranslation as a dependency

### Maven

Add the following repository to **&lt;repositories&gt;** section:

```xml
<repository>
    <id>jitpack-repo</id>
    <url>https://jitpack.io</url>
</repository>
```

And add the following dependency to **&lt;dependencies&gt;** section:

```xml
<dependency>
    <groupId>net.guizhanss</groupId>
    <artifactId>SlimefunTranslation</artifactId>
    <version>VERSION</version>
    <scope>provided</scope>
</dependency>
```

[![Jitpack badge](https://jitpack.io/v/net.guizhanss/SlimefunTranslation.svg)](https://jitpack.io/#net.guizhanss/SlimefunTranslation)

Replace `VERSION` with the version you want to use.  
Click [here](https://jitpack.io/#net.guizhanss/SlimefunTranslation) to check all available versions.

### Gradle

Repository:

```groovy
repositories {
    maven {
        url 'https://jitpack.io'
    }
}
```

Dependency:

```groovy
dependencies {
    compileOnly 'net.guizhanss:SlimefunTranslation:VERSION'
}
```

[![Jitpack badge](https://jitpack.io/v/net.guizhanss/SlimefunTranslation.svg)](https://jitpack.io/#net.guizhanss/SlimefunTranslation)

Replace `VERSION` with the version you want to use.  
Click [here](https://jitpack.io/#net.guizhanss/SlimefunTranslation) to check all available versions.
