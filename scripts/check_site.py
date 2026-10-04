"""Check internal links and basic V0 publishing boundaries."""

from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
PAGES = sorted(ROOT.glob("*.html"))


class PageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
        self.ids = set()
        self.h1 = 0
        self.meta_robots = None
        self.forms = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if "id" in attrs:
            self.ids.add(attrs["id"])
        if tag == "h1":
            self.h1 += 1
        if tag == "meta" and attrs.get("name") == "robots":
            self.meta_robots = attrs.get("content")
        if tag == "form":
            self.forms.append(attrs)
        for key in ("href", "src"):
            if key in attrs:
                self.links.append(attrs[key])


pages = {}
for path in PAGES:
    parser = PageParser()
    parser.feed(path.read_text(encoding="utf-8"))
    pages[path.name] = parser
    assert parser.h1 == 1, f"{path.name}: expected one H1"
    assert parser.meta_robots == "noindex,nofollow", f"{path.name}: V0 indexing boundary missing"
    assert all("action" not in form for form in parser.forms), f"{path.name}: unexpected form action"

assert len(PAGES) == 8, f"expected 8 pages, found {len(PAGES)}"
errors = []
for path in PAGES:
    for link in pages[path.name].links:
        parsed = urlsplit(link)
        if parsed.scheme or link.startswith("//"):
            errors.append(f"{path.name}: unexpected external URL {link}")
            continue
        if not parsed.path and not parsed.fragment:
            continue
        target = (path.parent / unquote(parsed.path)).resolve() if parsed.path else path
        if not target.is_relative_to(ROOT) or not target.is_file():
            errors.append(f"{path.name}: missing target {link}")
            continue
        if parsed.fragment and target.suffix == ".html":
            if parsed.fragment not in pages[target.name].ids:
                errors.append(f"{path.name}: missing anchor {link}")
        if parsed.fragment and target.suffix == ".svg":
            if f'id="{parsed.fragment}"' not in target.read_text(encoding="utf-8"):
                errors.append(f"{path.name}: missing SVG symbol {link}")

assert not errors, "\n".join(errors)
print(f"OK: {len(PAGES)} pages, internal links and anchors valid; V0 form and indexing boundaries present")
