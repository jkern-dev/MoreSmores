json.array! @sites do |site|
    json.extract! site, :id, :name, :description
    json.photoUrl url_for(site.photo)
end