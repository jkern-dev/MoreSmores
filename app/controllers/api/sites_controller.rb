class Api::SitesController < ApplicationController
    def index 
      if (params[:search]!=nil)
        @sites = Site.where("lower(name) like ?", "%#{params[:search].downcase}%")
      else
        @sites = Site.all
      end
    end

    def show 
        @site = Site.find(params[:id])
    end

    def create 
        @site = Site.new(site_params)
        @site.user_id = current_user.id
        if @site.save
            render "api/sites/show"
        else
            render json: @site.errors.full_messages, status: 422
        end
    end

    def update
      @site = Site.find(params[:id])
      if @site.update(site_params)
          render "api/sites/show"
      else
        render json: @site.errors.full_messages, status: 422
      end
    end

    def destroy 
        @site = Site.find(params[:id])
        @site.destroy 

        render "api/sites/show"
    end

    private 
    def site_params
        params.require(:site).permit(
            :name,
            :capacity,
            :fire_allowed,
            :rv_allowed,
            :pet_allowed,
            :bike_activity,
            :hike_activity,
            :latitude,
            :longitude,
            :state,
            :description,
            :photo,
            :city,
            :price
        )
    end
end