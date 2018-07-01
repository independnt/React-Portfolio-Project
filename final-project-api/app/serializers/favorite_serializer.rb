class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :state, :street, :phone, :url
end
