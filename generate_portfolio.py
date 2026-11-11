"""Keep the alternate portfolio entry in sync without overwriting design edits."""
from pathlib import Path
import shutil
root = Path(__file__).resolve().parent
shutil.copyfile(root / "index.html", root / "portfolio.html")
print("Synced portfolio.html from index.html")
