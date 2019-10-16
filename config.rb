activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

# Assumes the file source/about/template.html.erb exists
activate :directory_indexes

lista_menus = []

data.menus.estrellas.each do |menu|
  lista_menus << menu
end



lista_menus.each do |menu|
  proxy "/#{menu.slug}.html", "/menu.html", :locals => { :menu => menu.slug , title: menu.title },  ignore: true
end



lista_cafes = []

data.menus.coffees.each do |cafe|
  lista_cafes << cafe
end

lista_cafes.each do |cafe|
  proxy "/#{cafe.slug}.html", "/cafe.html", :locals => { :cafe => cafe.slug,  title: cafe.title },  ignore: true
end

lista_pasteles = []

data.pasteles.pasteles.each do |pastel|
  lista_pasteles << pastel
end

data.pasteles.mini_pasteles.each do |pastel|
  lista_pasteles << pastel
end



lista_pasteles.each do |pastel|
  proxy "/#{pastel.slug}.html", "/pastel.html", :locals => { :pastel => pastel.slug,  title: pastel.title },  ignore: true
end

activate :sprockets

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
  activate :relative_assets
  set :relative_links, true
end

activate :deploy do |deploy|
  deploy.build_before = true
  deploy.method = :git
  deploy.branch   = 'gh-pages'

end




###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (https://middlemanapp.com/advanced/dynamic_pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
# configure :development do
#   activate :livereload
# end

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'


