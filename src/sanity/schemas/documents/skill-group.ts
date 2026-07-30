import { defineField, defineType } from "sanity";

export const skillGroupType = defineType({
  name: "skillGroup",
  title: "Skill Group",
  type: "document",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "items",
      title: "Skills",
      type: "array",
      of: [{ type: "string" }],
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
      title: "label"
    }
  }
});
