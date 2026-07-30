import { defineField, defineType } from "sanity";

export const educationType = defineType({
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    defineField({
      name: "institution",
      title: "Institution",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "degree",
      title: "Degree",
      type: "string",
      validation: (Rule) => Rule.required()
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
      name: "gpa",
      title: "GPA",
      type: "string"
    }),
    defineField({
      name: "details",
      title: "Details",
      type: "array",
      of: [{ type: "string" }]
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
      title: "degree",
      subtitle: "institution"
    }
  }
});
