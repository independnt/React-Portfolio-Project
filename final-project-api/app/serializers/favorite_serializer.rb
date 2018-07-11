class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :state, :street, :phone, :url
  belongs_to :user
end
