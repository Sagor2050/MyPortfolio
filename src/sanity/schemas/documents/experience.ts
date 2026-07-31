import { defineField, defineType } from "sanity";

export const experienceType = defineType({
  name: "experience",
  title: "Experience",
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
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "context",
      title: "Context",
      type: "string"
    }),
    defineField({
      name: "location",
      title: "Location",
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
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [{ type: "text", rows: 3 }],
      validation: (Rule) => Rule.required().min(1)
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
