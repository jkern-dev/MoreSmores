## [MoreS'mores](https://moresmores.herokuapp.com/#/)

* [MoreS'mores](https://moresmores.herokuapp.com/#/) is a clone of the camping app HipCamp. More S'mores allows users to find camp and reserve camping sites. Additionally users can place their own property as camp sites and control reservations to their camp sites. Every site lists their various amenities such as allowing pets or to park an RV, enabling users to search and find camp sites by their preference.
* Built using Ruby on Rails, React, Redux, Google Maps API, AWS S3 for image storage

## Install
``` bash
npm install
bundle install
````

Create and initialize database 
``` bash
bundle exec rails db:setup
````

Launch site
``` bash
npm start
bundle exec rails server
```

## Search Implementation
``` ruby
def index 
      if (params[:search]!=nil)
        @sites = Site.where("lower(name) like ?", "%#{params[:search].downcase}%")
      else
        @sites = Site.all
      end
    end
 ```
 * Implementing search was done through an update to Rails backend controller when reuqesting all sites. Including an alternative when a search condition is added in params allows for fetching sites where only the name matches with the search condition. 

![](search_feature.gif)







