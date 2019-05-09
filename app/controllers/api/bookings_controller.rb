class Api::BookingsController < ApplicationController
  
  def create 
    @booking = Booking.new(booking_params)
    @booking.user_id = current_user.id 
    if @booking.save
      render "api/bookings/show"
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def update 
    @booking = Booking.find(params[:id])
    if @booking.update(booking_params)
      render "api/bookings/show"
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def destroy
    @booking = Booking.find(params[:id])
    @booking.destroy 
    render "api/bookings/show"
  end

  private 

  def booking_params
    params.require(:booking).permit(
      :site_id,
      :group_size,
      :start_date,
      :end_date,
      :approved,
      :reviewed
    )
  end
end