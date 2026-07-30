import { defineField, defineType } from "sanity";

export const linkType = defineType({
  name: "link",
  title: "Link",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "href",
      title: "URL",
      type: "url",
      validation: (Rule) => Rule.required().uri({ scheme: ["http", "https", "mailto", "tel"] })
    })
  ]
});
