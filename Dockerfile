FROM rocker/shiny-verse
RUN install2.r rsconnect leaflet plotly sf leaflet.extras bsplus geojsonsf \
geometries gghighlight janitor jsonify leafpop rapidjsonr rgdal sfhe \
shinycssloaders shinydashboard shinyjs shinythemes tigris zoo
RUN installGithub.r CompassRed/CRplot \
&& rm -rf /tmp/downloaded_packages/
WORKDIR /home/shinyusr
COPY ./ /home/shinyusr/app
COPY deploy.R deploy.R
CMD Rscript deploy.R
