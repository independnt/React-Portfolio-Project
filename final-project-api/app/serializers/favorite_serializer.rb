class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :state, :street, :phone, :url, :user_id
  belongs_to :user
end
