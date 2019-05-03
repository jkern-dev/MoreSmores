class Api::SitesController < ApplicationController
    def index 
        @sites = Site.all
    end

    def show 
        @site = Site.find(params[:id])
    end

    def create 
        @site = Site.new(site_params)

        if @site.save
            render :show 
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
        params.require(:site).permid(:)
end