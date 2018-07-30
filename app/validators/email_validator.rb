# coding: utf-8
class EmailValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)
    if value.present?
      unless value =~ /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
        record.errors[attribute] << (options[:message] || "Ingrese un correo válido (ej: prueba@mail.com)")
      end
    end
  end
end
