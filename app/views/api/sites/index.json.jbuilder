@sites.each do |site|
    json.set! site.id do 
        json.partial! "api/sites/sites", site: site
        json.photoUrl url_for(site.photo)
    end
end
