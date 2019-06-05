@bookings.each do |booking|
  json.set! booking.id do 
    json.extract! booking, :id, :user_id, :site_id, :group_size, :start_date, :end_date, :approved, :reviewed, :total_price
    json.extract! booking.site, :name
    json.photoUrl url_for(booking.site.photo)
  end
end