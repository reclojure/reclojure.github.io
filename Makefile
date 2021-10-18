PHONY: build

clean:
	rm -rf _site
	rm -f "resources/public/css/compiled.css"

build: clean
	cp -r old_site _site/old_site
	clojure -A:dev -X:freeze
	cp -r resources/public/* _site/
	cp CNAME _site/

server:
	cd _site && python3 -m http.server 8080 --bind 127.0.0.1
	echo "Open localhost:8080"
