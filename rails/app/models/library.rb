class Library < ActiveRecord::Base
  attr_accessible :name
  has_many :commands
end
