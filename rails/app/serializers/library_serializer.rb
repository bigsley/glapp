class LibrarySerializer < ActiveModel::Serializer
  embed :ids, embed_in_root: true, include: true
  has_many :commands

  attributes :id, :name
end
