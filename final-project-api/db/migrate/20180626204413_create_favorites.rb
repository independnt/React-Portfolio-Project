class CreateFavorites < ActiveRecord::Migration[5.1]
  def change
    create_table :favorites do |t|
      t.string :name
      t.string :city
      t.string :state
      t.string :street
      t.string :phone
      t.string :url
      t.integer :user_id

      t.timestamps
    end
  end
end
