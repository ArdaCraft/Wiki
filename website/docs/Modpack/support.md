---
id: support
title: Support
---
Having problems with your Minecraft? Here a a few helpful articles on how to fix them.

## Allocating RAM

Modded Minecraft often needs to use more ram than Vanilla does to ensure it runs smoothly.  
If you're having performance issues, or your game crashes with an `OutOfMemoryException`, then you should try allocate more ram in your launcher settings.

#### What's the Best Amount of RAM?

It's a good idea to be conservative with the amount of ram you allocate. You want to assign enough to allow your game to load and run without the `OutOfMemoryException` crashes, but not so much that Java struggles to manage the memory (causing frame-stuttering/lag).

A good starting point for modded minecraft is 2GB.

#### Mojang Launcher

Follow the steps taken in the video to open the launch options for your modpack profile.  
Under 'JVM Args' modify the `-Xmx#G` value, changing the `#` to the number of Gigabytes you want to assign.
This will become the maximum amount of ram that the game can use.
<video src="../../static/mojang-jvm-args.mp4" width={560} height={350} controls={true} preload="" /> 

#### Modpack Launcher

Open the launcher Options window and modify the 'Maximum memory' value.  
**Note - this value is in Megabytes, not Gigabytes.**  
There are 1024 Megabytes in 1 Gigabyte, so to allocate 2 Gigabytes of ram, enter a value of 2048.
<video src="../../static/launcher-jvm-args.mp4" width={560} height={350} controls={true} preload="" /> 

##### Regarding the other settings:

-   'Minimum memory' - this should never be higher than the 'Maximum memory' value.
-   'PermGen' - this has absolutely no effect when running the game with Java 8 or above, leave it alone, or set it to any value - it doesn't matter!

## Finding Logs & Crash-Reports

#### Mojang Launcher

##### Windows

If you're using a modded profile, you'll want to grab the `fml-client-latest.log` file from:

```

/Users/<your_username>/AppData/roaming/.minecraft/logs

```

You'll normally want to grab the crash-report that corresponds with your most recent crash, from:

```

/Users/<your_username>/AppData/roaming/.minecraft/crash-reports

```

##### Mac OS

If you're using a modded profile, you'll want to grab the `fml-client-latest.log` file from:

```

~/Application Support/minecraft/logs

```

You'll normally want to grab the crash-report that corresponds with your most recent crash, from:

```

~/Application Support/minecraft/crash-reports

```

#### Modpack Launcher

// todo

## Installing 64bit Java

1.  Download the 64bit Java installer for your operating system (the **x64** version) from here:
    http:
2.  Run the installer and follow it's instructions to completion
3.  You can check that the correct Java version has been installed by opening CMD (Windows) or Terminal (Mac) and typing:

```



```

## Uninstalling Old Java Versions

If you have 32bit Java installed, you may need to uninstall it before installing a 64bit version

#### Mac OS

See this article on how to uninstall Java on Mac OS: [howtogeek.com](https://www.howtogeek.com/230145/how-to-uninstall-java-on-mac-os-x/)

#### Windows

See this article on how to uninstall Java on Windows: [guidingtech.com](http://www.guidingtech.com/20274/completely-remove-uninstall-java-windows-pc/)
