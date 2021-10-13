---
id: cinema4d
title: Cinema 4D
---
# Importing modded blocks into Cinema 4D

This little tutorial will show you how to import a map section of a modded world for Minecraft into Cinema 4D.

# Downloading the world

You will need to have a server with dynmap installed.

1.  Find a section of the map you want to render. The size of your export will depend on how much ram the system you're rendering on has. More ram = larger size to export. You'll have to play around with what size your system can handle.
2.  Get two points where you want to export (think of this like world edit where you select two points). Use the command `/dynmapexp pos0` for the first position and `/dynmapexp pos1` for the second position.
3.  Type `/dynmapexp set byTexture true` This will export all textures as individual objects.
4.  Type `/dynmapexp export name` Where name is the name of the zip file you want your export to be called.

-   this initiates an export, creating a file named name.zip in the export directory on the server (this defaults to a directory named 'export' under the dynmap directory, but can be changed using the 'exportpath' setting in configuration.txt). This process runs asynchronously, and can take from a few seconds to many minutes to complete, depending upon the size of the area selected for export.

6.  The zip file will contain a folder of all the texture pngs found in your export, an obj of the world, and a texture .mtl file.

# Importing into Cinema 4D

1.  Unzip the export file you just created from the server.
2.  In Cinema 4D - go to `file -> open` and open the .obj file
3.  Download this script: https: - click the green download button and unzip the .py file
4.  Back in Cinema 4D go to `` and open the .py file you just downloaded. It will open another explorer window. This is where you will open the .mtl file from the export. The script will put textures on all the currently imported objects.
5.  You should be all good to go to start rendering!

## Notes

Currently some of the texturing for blocks is weird. I still need to go through the script and edit some settings. I will update this doc as I do that. You may want to go through each object and edit the texture settings to your liking.
