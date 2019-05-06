class Api::SitesController < ApplicationController
    def index 
        @sites = Site.all
    end

    def show 
        @site = Site.find(params[:id])
        # if @site
        #     # render "api/sites/show"
        # else
        #     render json: @site.errors.full_messages, status: 422
        # end
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

    def destroy 
        @site = Site.find(params[:id])
        @site.destroy 

        render :show 
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
            :photo
        )
    end
end