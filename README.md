<a href="https://critcola.com/">![Logo](https://critcola.com/assets/images/crit-cola-banner.svg)</a>

# Overwatch Hero Icons for Discourse

This plugin for Discourse formats Overwatch hero names in posts, appending hero icons and correcting hero spelling and character case.

## Installation

Add the plugin's repository URL to your container's `app.yml` file, for example:

```yml
hooks:
  after_code:
    - exec:
        cd: $home/plugins
        cmd:
          - mkdir -p plugins
          - git clone https://github.com/critcola/discourse-overwatch-hero-icons.git
```

Rebuild the container:

```
cd /var/discourse
./launcher rebuild app
```

For the plugin to apply retroactively, you'll need to rebake old posts:

```
cd /var/discourse
./launcher enter app
rake posts:rebake
```

## About Crit Cola

Crit Cola is an [Overwatch community](https://critcola.com) for PC gamers. Join our [Steam group](http://steamcommunity.com/groups/critcola) and follow us on [Twitter](https://twitter.com/critcolaguild)!

## License

The Overwatch Hero Icons for Discourse plugin is released under the [MIT License](LICENSE).
