import { axiosClassic, axiosWithAuth } from '@/api'
import { API_URL } from '@/config'
import type { ICategory } from '@/shared'

class CategoryService {
  async getAll() {
    const { data } = await axiosClassic<ICategory[]>({
      url: API_URL.categories(),
      method: 'GET'
    })
    return data || []
  }

  async getById(categoryId: string) {
    const { data } = await axiosClassic<ICategory>({
      url: API_URL.categories(`/${categoryId}`),
      method: 'GET'
    })
    return data || []
  }

  async create(data: ICategory) {
    const { data: createData } = await axiosWithAuth<ICategory>({
      url: API_URL.categories(),
      method: 'POST',
      data
    })
    return createData
  }

  async update(data: ICategory, categoryId: string) {
    const { data: updateData } = await axiosWithAuth<ICategory>({
      url: API_URL.categories(`/${categoryId}`),
      method: 'PUT',
      data
    })
    return updateData
  }

  async delete(categoryId: string) {
    const { data } = await axiosWithAuth<ICategory>({
      url: API_URL.categories(`/${categoryId}`),
      method: 'DELETE'
    })
    return data
  }
}

export const categoryService = new CategoryService()
