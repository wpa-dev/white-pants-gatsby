import S from '@sanity/desk-tool/structure-builder'
import { MdBusiness, MdSettings, MdHome } from 'react-icons/md'
import { FaFile } from 'react-icons/fa'
import PreviewIFrame from './src/components/previewIFrame'

const hiddenTypes = ['category', 'companyInfo', 'page', 'person', 'post', 'project', 'siteSettings', 'homepage']

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),
      S.listItem()
        .title('Company Info')
        .child(
          S.editor()
            .id('companyInfo')
            .schemaType('companyInfo')
            .documentId('companyInfo')
        )
        .icon(MdBusiness),
      S.listItem()
        .title('People')
        .schemaType('person')
        .child(S.documentTypeList('person').title('People')),
      S.documentListItem()
        .title('Homepage')
        .schemaType('homepage')
        .icon(MdHome)
        .child(
          S.document()
            .schemaType('homepage')
            .documentId('homepage')
            .views([S.view.form(), PreviewIFrame()])
        ),
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Office')
                .child(
                  S.editor()
                    .id('officePage')
                    .schemaType('page')
                    .documentId('office')
                )
                .icon(FaFile),
              S.listItem()
                .title('Work')
                .child(
                  S.editor()
                    .id('workPage')
                    .schemaType('page')
                    .documentId('work')
                )
                .icon(FaFile),
            ])
        ),
      S.listItem()
        .title('Projects')
        .schemaType('project')
        .child(S.documentTypeList('project')),
      S.listItem()
        .title('Blog posts')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog posts')),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      ...S.documentTypeListItems().filter(listItem => !hiddenTypes.includes(listItem.getId()))
    ])