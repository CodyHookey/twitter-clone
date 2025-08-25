class StaticPagesController < ApplicationController
  before_action :redirect_if_logged_in, only: [:index]
  before_action :require_login, only: [:feed, :user_feed]

  def index
  end

  def feed
  end

  def user_feed
  end

  private

  def require_login
    if !current_user
      redirect_to root_path
    end
  end

  def redirect_if_logged_in
    if current_user
      redirect_to "/feed"
    end
  end

  def current_user
    token = cookies.signed[:twitter_session_token]
    session = Session.find_by(token: token)
    session&.user
  end
end
