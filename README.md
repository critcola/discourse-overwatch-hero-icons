# Overwatch Hero Icons for Discourse

This plugin for Discourse formats Overwatch hero names in posts, appending hero icons and correcting hero spelling and character case.

## Installation

Add the plugin's repository URL to your container's `app.yml` file:

```yml
hooks:
  after_code:
    - exec:
        cd: $home/plugins
        cmd:
          - mkdir -p plugins
          - git clone https://github.com/discourse/docker_manager.git
          - git clone https://github.com/discourse/discourse-spoiler-alert.git
```

Rebuild the container:

```
cd /var/discourse
./launcher rebuild app
```

## License

The Overwatch Hero Icons for Discourse plugin is released under the MIT License.
