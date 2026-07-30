import { defineField, defineType } from "sanity";

export const profileType = defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Full name",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "displayName",
      title: "Display name",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "initials",
      title: "Initials",
      type: "string",
      validation: (Rule) => Rule.required().max(4)
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "text",
      rows: 2,
      validation: (Rule) => Rule.required().max(180)
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required().max(420)
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "email",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string"
    }),
    defineField({
      name: "portrait",
      title: "Portrait",
      type: "image",
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: "portraitSrc",
      title: "Fallback portrait path",
      type: "string",
      description: "Use only while migrating local assets into Sanity."
    }),
    defineField({
      name: "resumeFile",
      title: "Resume PDF",
      type: "file",
      options: {
        accept: ".pdf"
      }
    }),
    defineField({
      name: "resumeHref",
      title: "Fallback resume URL",
      type: "string",
      description: "Use only while migrating local assets into Sanity."
    }),
    defineField({
      name: "links",
      title: "Social links",
      type: "array",
      of: [{ type: "link" }],
      validation: (Rule) => Rule.required().min(1)
    })
  ],
  preview: {
    select: {
      title: "displayName",
      subtitle: "headline",
      media: "portrait"
    }
  }
});
