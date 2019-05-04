json.array! @sites do |site|
    json.set! site.id do
        json.extract! site, :id, :name
        json.photoUrl url_for(site.photo)
    end
end