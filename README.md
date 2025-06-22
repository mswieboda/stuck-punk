# stuck-punk
Stuck Punk website

# installation

ruby 3.4.4

(installed locally via [asdf](https://github.com/asdf-vm/asdf-ruby, but can be `rbenv`, `rvm`, or `brew`, manual zip, etc)

```
gem install bundler
```

```
bundle install
```

# instructions

start app via command-line with

```
puma
```

which [puma](https://github.com/puma/puma) will use the `config.ru` file to run the [Sinatra](https://sinatrarb.com/) app

# helper commands

auto compile css

```
$ sass --watch public/css/app.scss:public/css/app.css
```

open firefox (from windows WSL)

```
$ firefox 0.0.0.0:9292 &

# and kill logs with CTRL+C, `&` still keeps `firefox` running
```
