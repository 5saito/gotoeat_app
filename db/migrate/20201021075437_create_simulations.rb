class CreateSimulations < ActiveRecord::Migration[6.0]
  def change
    create_table :simulations do |t|
      t.string :time, null: false
      t.string :people, null: false
      t.timestamps
    end
  end
end
