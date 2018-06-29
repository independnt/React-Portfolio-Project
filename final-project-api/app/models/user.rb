class User < ApplicationRecord
  has_secure_password
  validates :email, presence: true
  validates :password, presence: true
  validates :username, uniqueness: true 
  has_many :favorites
end
