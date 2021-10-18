PHONY: build

clean:
	rm -rf docs
	rm -rf _site
	rm -f "resources/public/css/compiled.css"

build: clean
	mkdir -p docs
	cp -r old_site/ docs/
	clojure -A:dev -X:freeze
	cp -r resources/public/* docs/
	cp _site/index.html docs/
	cp CNAME docs/

server:
	cd docs && python3 -m http.server 8080 --bind 127.0.0.1
	echo "Open localhost:8080"
