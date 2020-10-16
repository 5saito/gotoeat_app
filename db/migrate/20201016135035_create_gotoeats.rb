class CreateGotoeats < ActiveRecord::Migration[6.0]
  def change
    create_table :gotoeats do |t|

      t.timestamps
    end
  end
end
