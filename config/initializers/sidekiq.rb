require 'sidekiq'

Sidekiq.configure_client do |config|
  config.redis = YAML.load_file(Rails.root.join('config', 'redis.yml'))[Rails.env.to_s]['sidekiq_redis']
end

Sidekiq.configure_server do |config|
  config.redis = YAML.load_file(Rails.root.join('config', 'redis.yml'))[Rails.env.to_s]['sidekiq_redis']
end
