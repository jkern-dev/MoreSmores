json.sites do
    json.set! @site.id do 
        json.partial! "api/sites/sites", site: @site
    end
end
