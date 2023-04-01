import Contact from "../models/contact.js";

export const getContact = async (req, res) => {
  try {
    const contact = await Contact.find();
    res.send(contact);
  } catch (error) {
    res.send({ error });
  }
};

export const createContact = async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.send({ error: "Please fill all the credentials!" });
  }
  try {
    const newContact = new Contact(req.body);
    const save = await newContact.save();

    return res.send(save);
  } catch (error) {
    return res.send({ error });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const deleteContact = await Contact.findByIdAndDelete(req.params.id);
    res.send(deleteContact);
  } catch (error) {
    res.send({ error });
  }
};
