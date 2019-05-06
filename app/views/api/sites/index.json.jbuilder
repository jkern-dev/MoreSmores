@sites.each do |site|
    json.set! site.id do 
        json.extract! site, :id, :name, :description
        json.photoUrl url_for(site.photo)
    end
end
