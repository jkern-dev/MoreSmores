json.set! @booking.id do 
  json.extract! @booking, :user_id, :site_id, :group_size, :start_date, :end_date, :approved, :reviewed, :total_price
end