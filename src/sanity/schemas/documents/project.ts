import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name"
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "description",
      title: "Short description",
      type: "string",
      validation: (Rule) => Rule.required().max(120)
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
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required().min(1)
    }),
    defineField({
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [{ type: "text", rows: 3 }],
      validation: (Rule) => Rule.required().min(1)
    }),
    defineField({
      name: "repositoryUrl",
      title: "Repository URL",
      type: "url"
    }),
    defineField({
      name: "demoUrl",
      title: "Demo URL",
      type: "url"
    }),
    defineField({
      name: "image",
      title: "Project image",
      type: "image",
      options: {
        hotspot: true
      }
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
      title: "name",
      subtitle: "description",
      media: "image"
    }
  }
});
