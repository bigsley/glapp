class CreateCommands < ActiveRecord::Migration
  def change
    create_table :commands do |t|
      t.integer :position
      t.string :code
      t.integer :library_id

      t.timestamps
    end
  end
end
