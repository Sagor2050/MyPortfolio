import { defineField, defineType } from "sanity";

export const honorType = defineType({
  name: "honor",
  title: "Honor",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "organization",
      title: "Organization",
      type: "string"
    }),
    defineField({
      name: "start",
      title: "Start",
      type: "string"
    }),
    defineField({
      name: "end",
      title: "End",
      type: "string"
    }),
    defineField({
      name: "details",
      title: "Details",
      type: "array",
      of: [{ type: "text", rows: 3 }]
    }),
    defineField({
      name: "order",
      title: "Sort order",
      type: "number",
      initialValue: 0
    })
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "organization"
    }
  }
});
