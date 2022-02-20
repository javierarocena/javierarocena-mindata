FROM node:latest
LABEL authors="Javier Arocena"

ENV HOME=/app
RUN mkdir $HOME
WORKDIR $HOME
COPY . .
RUN npm install -g @angular/cli
RUN npm install
# RUN npm run build --prod

# Puerto entorno dev
EXPOSE 4200
# Puerto livereload
EXPOSE 49153
# Puerto Test
EXPOSE 9876
# Puerto e2e
EXPOSE 49152

CMD ng serve
