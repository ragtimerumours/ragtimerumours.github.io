# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "forty"
  spec.version       = "1.2"
  spec.authors       = [""]
  spec.email         = [""]

  spec.summary       = %q{}
  spec.homepage      = ""
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i) }

  spec.add_development_dependency "jekyll", "~> 4.1.1"
  spec.add_development_dependency "bundler", "~> 2.1.4"
end
