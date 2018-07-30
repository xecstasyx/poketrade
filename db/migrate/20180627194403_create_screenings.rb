class CreateScreenings < ActiveRecord::Migration[5.2]
  def change
    create_table :screenings do |t|
      t.string :name
      t.string :phone
      t.string :email
      t.string :status
      t.references :list, foreign_key: true

      t.timestamps
    end
  end
end
