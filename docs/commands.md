---
id: commands
title: Commands
---

## Relighter (ops only)
Forces the server to recalculate the sky light values for the given chunk(s).

| Command | Description | Notes |
| ------- | ----------- | ----- |
| `/relight` | Relight the chunk at the user's position | (Player only) |
| `/relight <chunk_radius>` | Relight all chunks around the user's position | (Player only) |
| `/relight <x> <z>` | Relight the chunk at the given block position | (Player or Console) |
| `/relight <x> <z> <chunk_radius>` | Relight all chunks around the given block position | (Player or Console) |

Usage Notes:
- Light calculations are relatively expensive so please make other users aware before running (it may cause lag).
- Avoid using the likes of WorldEdit/Voxel tools during the relight operation.
- The updated lighting may not be apparant when first visiting the re-lit chunk(s). Logging out and back in should fix this.
