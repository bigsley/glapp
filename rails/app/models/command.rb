class Command < ActiveRecord::Base
  attr_accessible :code, :position
  belongs_to :library
end
